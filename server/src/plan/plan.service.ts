import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanRepository } from './plan.repository';
import { Plan } from './plan.entity';
import { PlanDto } from './dto/plan-dto';

@Injectable()
export class PlanService {
  constructor(private planRepository: PlanRepository) {}

  async getPlan(userId: number): Promise<Plan[]> {
    const plans = await this.planRepository.find({
      where: { user_id: userId },
    });
    return plans;
  }

  async postPlan(planDto: PlanDto, userId: number) {
    this.planRepository.postPlan(planDto, userId);
  }

  async deletePlan(id: number) {
    this.planRepository.deletePlan(id);
  }
}
