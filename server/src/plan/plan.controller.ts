import {
  Body,
  Controller,
  Get,
  Req,
  UseGuards,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { Plan } from './plan.entity';
import { PlanService } from './plan.service';
import { AuthGuard } from '@nestjs/passport';
import { PlanDto } from './dto/plan-dto';
import { CheckPlanDto } from './dto/check-plan-dto';

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

  @Delete(':id')
  deletePlan(@Param() params: any) {
    const id = params.id;
    this.planService.deletePlan(id);
  }

  @Put(':id')
  checkPlan(@Param() params: any, @Body() checkPlanDto: CheckPlanDto) {
    const id = params.id;
    this.planService.checkPlan(id, checkPlanDto);
  }
}
