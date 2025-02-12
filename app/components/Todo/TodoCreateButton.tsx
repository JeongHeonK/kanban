import { useModalStore } from "@/app/store";

interface TodoCreateButtonProps {
  color: string;
  boardId: string;
}

export default function TodoCreateButton({
  color,
  boardId,
}: TodoCreateButtonProps) {
  const openModal = useModalStore((state) => state.openModal);
  const handleOpenModal = () => {
    openModal("todo");
  };
  console.log(boardId);
  return (
    <button
      type="button"
      onClick={handleOpenModal}
      style={{ borderColor: color, color }}
      className="text-center rounded-lg shadow-md py-2 px-3 border border-dashed"
    >
      +
    </button>
  );
}
