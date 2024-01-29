import { Alert } from "react-bootstrap"; // Import Alert component

type ErrorMessageProps = {
  text: string;
};

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <Alert variant="danger" className="error-message">
      <Alert.Heading>An error occurred!</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
}
