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
            if(goal.getDue().after(date)){
                goal.setStatus(2);
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

    public void deleteGoal(String id){
        goalRepository.deleteById(id);
    }

    public void completeGoal(String id) {
        Optional<Goal> goal = goalRepository.findById(id);
        if(goal.isPresent()){
            goal.get().setStatus(1);
            goalRepository.save(goal.get());
        }
    }
}
