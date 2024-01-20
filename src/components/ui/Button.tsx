interface IButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ text, onClick, disabled = false }: IButtonProps) {
  return (
    <button onClick={() => onClick()} disabled={disabled}>
      {text}
    </button>
  );
}
