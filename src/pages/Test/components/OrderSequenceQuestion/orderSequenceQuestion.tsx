import styles from './styles.module.css'
import { ICurrentQuestion } from '../../../../models/ITest'
import { v4 as uuid } from 'uuid'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from '../SortableItem/sortableItem';

export const OrderSequenceQuestion = ({ currentUserAnswer, setCurrentUserAnswer }: ICurrentQuestion) => {

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;
    if(currentUserAnswer) {
      if (active.id !== over?.id) {
        const oldIndex = currentUserAnswer.indexOf(`${active.id}`)
        const newIndex = currentUserAnswer.indexOf(`${over?.id}`)
  
        const newAnswers = arrayMove(currentUserAnswer, oldIndex, newIndex)
  
        setCurrentUserAnswer(newAnswers)
      }
    }  
  }


  return (
    <div className={styles.answersContainer}>
      <div className={styles.content}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={currentUserAnswer ? currentUserAnswer : []}
            strategy={verticalListSortingStrategy}
          >
            {currentUserAnswer && currentUserAnswer.map((answer) => <SortableItem key={uuid()} id={answer} answer={answer}/>)}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
