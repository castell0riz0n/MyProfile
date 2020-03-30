import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Skill } from '../../../models/IGetResumeResp.interface';
import { SkillCategory } from '../../../enums/skill-category.enum';
import { SkillLevel } from '../../../enums/skill-level.enum';

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.scss']
})
export class SkillsContentComponent implements OnInit {

  backend: Skill[] = [];
  frontend: Skill[] = [];
  other: Skill[] = [];
  skills = SkillLevel;
  constructor(
    private _data: DataService,
  ) {
    _data.currentResumeData.subscribe(data => {
      const _this = this;

      data.skills.forEach((skill) => {
        switch (skill.category) {

          case SkillCategory.Backend:
            skill.percent = _this.calculatePercents(skill);
            _this.backend.push(skill);
            break;

          case SkillCategory.Frontend:
            skill.percent = _this.calculatePercents(skill);
            _this.frontend.push(skill);
            break;

          default:
            skill.percent = _this.calculatePercents(skill);
            _this.other.push(skill);
            break;
        }
      });
    });
  }

  ngOnInit() {
  }

  calculatePercents(skill: Skill): number {
    switch (skill.level) {
      case SkillLevel.Noob:
        return 20;
      case SkillLevel.Junior:
        return 40;
      case SkillLevel.Mediocre:
        return 60;
      case SkillLevel.Senior:
        return 80;
      case SkillLevel.Advanced:
        return 100;
      default:
        return 50;
    }
  }
}
