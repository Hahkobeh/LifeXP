package uofc.lifexp.goalsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uofc.lifexp.goalsystem.goal.Goal;
import uofc.lifexp.goalsystem.goal.GoalForm;
import uofc.lifexp.goalsystem.goal.GoalService;
import uofc.lifexp.usersystem.UserController;

import java.util.List;

@Controller
@RequestMapping(path = "api/goal")
@CrossOrigin(origins = {"http://localhost:3000"})
public class GoalController {
    private final GoalService goalService;
    private final UserController userController;
    @Autowired
    public GoalController(GoalService goalService, UserController userController){
        this.goalService = goalService;
        this.userController = userController;
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
    @ResponseBody
    public boolean deleteGoal(@PathVariable String id){
        return goalService.deleteGoal(id);
    }

    @PutMapping("/complete/{id}")
    @ResponseBody
    public boolean completeGoal(@PathVariable String id){
        return userController.completeGoal(goalService.completeGoal(id));
    }

    @PostMapping("/test")
    @ResponseBody
    public GoalForm test(@RequestBody GoalForm goalForm){
        System.out.println(goalForm);
        return goalForm;
    }
}
