import {TaskStatus} from "./TaskStatus.ts";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}