package dtos

type TaskMessage struct {
	To      string `json:"to"`
	Title   string `json:"title"`
	DueDate string `json:"dueDate"`
}

type TaskCreatedMessage = Message[TaskMessage]
