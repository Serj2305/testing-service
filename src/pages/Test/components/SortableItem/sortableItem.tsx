
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import styles from './styles.module.css'

export function SortableItem({id, answer}:{id:string, answer: string}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} className={styles.answer} style={style} {...attributes} {...listeners}>
      {answer}
    </div>
  );
}