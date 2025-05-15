package interfaces

type QueuePublish interface {
	Publish(queue string, body []byte) error
}
