package adapters

import (
	"fmt"
	"log"

	"github.com/rabbitmq/amqp091-go"
)

type Queue struct {
	conn    *amqp091.Connection
	channel *amqp091.Channel
}

func NewQueue(queueUrl string) *Queue {
	conn, err := amqp091.Dial(queueUrl)

	if err != nil {
		fmt.Println(err)
		log.Fatal("Error connecting to queue!")
	}

	ch, err := conn.Channel()

	if err != nil {
		log.Fatal("Error opening channel!")
	}

	return &Queue{
		conn:    conn,
		channel: ch,
	}
}

func (q *Queue) SetupQueue(queue, exchange, routingKey string) error {
	_, err := q.channel.QueueDeclare(
		queue, true, false, false, false, nil,
	)
	if err != nil {
		return fmt.Errorf("queue declare error: %w", err)
	}

	if err := q.channel.ExchangeDeclare(
		exchange, "direct", true, false, false, false, nil,
	); err != nil {
		return fmt.Errorf("exchange declare error: %w", err)
	}

	if err := q.channel.QueueBind(
		queue, routingKey, exchange, false, nil,
	); err != nil {
		return fmt.Errorf("queue bind error: %w", err)
	}

	return nil
}

func (q *Queue) Consumer(queue string, handler func([]byte)) {
	msgs, err := q.channel.Consume(queue, "", false, false, false, false, nil)

	if err != nil {
		log.Fatalf("Failed to start consumer for queue %s: %v", queue, err)
	}

	go func() {
		for msg := range msgs {
			handler(msg.Body)
			msg.Ack(false)
		}
	}()

}
