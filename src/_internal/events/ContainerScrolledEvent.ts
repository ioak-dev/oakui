import {Subject} from 'rxjs';

export const containerScrolledSubject = new Subject<ContainerScrolledType>();

interface ContainerScrolledType {
  component: string;
  id: string;
}
