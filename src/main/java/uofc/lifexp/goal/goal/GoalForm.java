package uofc.lifexp.goal.goal;

import lombok.Data;

import java.util.Date;

@Data
public class GoalForm {
    private String username;
    private String body;
    private String date;
    private int rating;
}
