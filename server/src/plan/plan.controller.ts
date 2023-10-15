import { Body, Controller, Get, Req, UseGuards, Post } from '@nestjs/common';
import { Plan } from './plan.entity';
import { PlanService } from './plan.service';
import { AuthGuard } from '@nestjs/passport';
import { PlanDto } from './dto/plan-dto';

@Controller('plan')
@UseGuards(AuthGuard())
export class PlanController {
  constructor(private planService: PlanService) {}

  @Get()
  getPlan(@Req() request): Promise<Plan[]> {
    return this.planService.getPlan(request.user.id);
  }

  @Post()
  postPlan(@Req() request, @Body() planDto: PlanDto): Promise<void> {
    this.planService.postPlan(planDto, request.user.id);
    return;
  }
}
