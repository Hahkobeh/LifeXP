package uofc.lifexp.goal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uofc.lifexp.goal.goal.Goal;
import uofc.lifexp.goal.goal.GoalForm;
import uofc.lifexp.goal.goal.GoalService;
import uofc.lifexp.usersystem.UserController;
import uofc.lifexp.usersystem.user.User;

import java.util.List;

@Controller
@RequestMapping(path = "api/goal")
@CrossOrigin(origins = {"http://localhost:3000"})
public class GoalController {
    private final GoalService goalService;
    @Autowired
    public GoalController(GoalService goalService){
        this.goalService = goalService;
    }

    @GetMapping("/get-goals/{username}")
    @ResponseBody
    public List<Goal> getGoals(@PathVariable String username){
        return goalService.getGoals(username);
    }

    @PostMapping("/create-goal")
    @ResponseBody
    public Goal addGoal(@RequestBody GoalForm goalForm){
        return goalService.addGoal(goalForm);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteGoal(@PathVariable String id){
        goalService.deleteGoal(id);
    }

    @PutMapping("/complete/{id}")
    public void completeGoal(@PathVariable String id){
        goalService.completeGoal(id);
    }

    @PostMapping("/test")
    @ResponseBody
    public GoalForm test(@RequestBody GoalForm goalForm){
        System.out.println(goalForm);
        return goalForm;
    }
}
