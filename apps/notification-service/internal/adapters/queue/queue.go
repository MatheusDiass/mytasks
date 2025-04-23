package queue

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

func (q *Queue) Consumer(queue string, handler func([]byte)) error {
	_, err := q.channel.QueueDeclare(
		queue,
		true,
		false,
		false,
		false,
		nil,
	)

	if err != nil {
		return err
	}

	msgs, err := q.channel.Consume(
		queue,
		"",
		false,
		false,
		false,
		false,
		nil,
	)

	if err != nil {
		return err
	}

	for i := 0; i <= 5; i++ {
		go func(workerId int) {
			for msg := range msgs {
				handler(msg.Body)
				msg.Ack(false)
			}
		}(i)
	}

	return nil
}
