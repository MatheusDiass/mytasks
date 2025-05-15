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

func (q *Queue) Publish(queue string, body []byte) error {
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

	err = q.channel.Publish(
		"",
		queue,
		false,
		false,
		amqp091.Publishing{
			ContentType: "application/json",
			Body:        body,
		},
	)

	if err != nil {
		return fmt.Errorf("error posting message to queue '%s': %w", queue, err)
	}

	return nil
}
