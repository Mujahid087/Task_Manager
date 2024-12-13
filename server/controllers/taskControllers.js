import Notice from "../models/notification.js";
import Task from "../models/task.js"
export const createTask = async (req, res) => {
    try {
        const { title, team, stage, date, priority, assets } = req.body;

        const task = await Task.create({
            title,
            team,
            stage: stage.toLowerCase(),
            date,
            priority: priority.toLowerCase(),
            assets,
            activities: activity,
        });

        let text = "New task has been assigned to you"

        if (task.team.length > 1) {
            text = text + `and ${task.team.length - 1} others`

        }
        text = text +
            `The task priority is set a ${task.priority
            } priority , so check and act accordingly . The task date us ${task.date.toDateString}.Thank you!!!`
        
            await Notice.create({
                team,text,task:task_id,
            })

            res.status(200)
            .json({
                status:true,
                message:"Task created successfully",
            })
    }
    catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }


}

// export const = async (req,res) => {
//     try{

//     }
//     catch(error){
//         return res.status(400).json({
//             status:false,
//             message:error.message
//         })
//     }
// }