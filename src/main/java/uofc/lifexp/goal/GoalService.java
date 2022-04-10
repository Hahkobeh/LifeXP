package uofc.lifexp.goal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoalService {
    private final GoalRepository goalRepository;
    @Autowired
    public GoalService(GoalRepository goalRepository){
        this.goalRepository = goalRepository;
    }
}
