package uofc.lifexp.goal.goal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class GoalService {
    private final GoalRepository goalRepository;
    @Autowired
    public GoalService(GoalRepository goalRepository){
        this.goalRepository = goalRepository;
    }

    public List<Goal> getGoals(String username){
        System.out.println(username);
        Date date = new Date();
        List<Goal> goals = goalRepository.findAllByUsername(username);
        for(Goal goal:goals){
            if(goal.getDue().before(date) && goal.getStatus() == 0){
                goal.setStatus(2);
                goalRepository.save(goal);
            }
        }
        return goals;
    }

    public Goal addGoal(GoalForm goalForm){
        Goal goal = new Goal(goalForm);
        if(goal.getDue() != null) {
            System.out.println(goal);
            goalRepository.save(goal);
            return goal;
        }
        return null;
    }

    public boolean deleteGoal(String id){
        goalRepository.deleteById(id);
        return true;
    }

    public Goal completeGoal(String id) {
        Optional<Goal> goal = goalRepository.findById(id);
        if(goal.isPresent()){
            Goal goal1 = goal.get();
            goal1.setStatus(1);
            goalRepository.save(goal1);
            return goal1;
        }
        return null;
    }
}
