export const CLEAR_TASK='CLEAR_TASK';
export const SET_EDITED_TASK='SET_EDITED_TASK';

export const clearTask=payload=>({
   type:CLEAR_TASK,
   payload
});

export const setEditedTask=task=>({
    type:SET_EDITED_TASK,
    payload:task
})