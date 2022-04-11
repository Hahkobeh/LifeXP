package uofc.lifexp.goalsystem.goal;

import lombok.Data;

@Data
public class GoalForm {
    private String username;
    private String title;
    private String date;
    private int difficulty;
}
