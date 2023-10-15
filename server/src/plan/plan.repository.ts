import {
  Repository,
  DataSource,
  FindOneOptions,
  FindManyOptions,
} from 'typeorm';
import { Plan } from './plan.entity';
import { Injectable } from '@nestjs/common';
import { PlanDto } from './dto/plan-dto';
import { CheckPlanDto } from './dto/check-plan-dto';

@Injectable()
export class PlanRepository {
  #planRepository: Repository<Plan>;
  constructor(private dataSource: DataSource) {
    this.#planRepository = this.dataSource.getRepository(Plan);
  }

  async find(findManyOptions: FindManyOptions<Plan>): Promise<Plan[]> {
    return await this.#planRepository.find(findManyOptions);
  }

  async postPlan(planDto: PlanDto, userId: number) {
    const { title, datetimeStart, datetimeEnd } = planDto;
    const plan = this.#planRepository.create({
      title,
      description: '',
      start_date: datetimeStart,
      due_date: datetimeEnd,
      user_id: userId,
      priority: 0,
      completed: false,
      completed_at: datetimeStart,
    });
    this.#planRepository.save(plan);
  }

  async deletePlan(id: number) {
    this.#planRepository.delete({ id: id });
  }

  async checkPlan(id: number, checkPlanDto: CheckPlanDto) {
    const { completeValue, datetime } = checkPlanDto;
    this.#planRepository.update(
      { id: id },
      { completed: completeValue, completed_at: datetime },
    );
  }
}
