

// yeh hamra api errors ha jo api k invalid hona pr error ko reppresent karega
class apiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors={},
        statck=""

    ){
        super(message)
        this.statusCode=statusCode,
        this.data=null,
        this.message=message,
        this.success=false,
        this.errors=errors

        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {apiError}