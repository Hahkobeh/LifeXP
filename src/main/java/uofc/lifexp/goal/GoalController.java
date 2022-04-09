package uofc.lifexp.goal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "api/goal")
@CrossOrigin(origins = {"http://localhost:3000"})
public class GoalController {
    private final GoalService goalService;
    @Autowired
    public GoalController(GoalService goalService){
        this.goalService = goalService;
    }
}
