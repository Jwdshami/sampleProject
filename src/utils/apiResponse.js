
// this is will give us the api respones we can reuse this 
class apiResponse {
    constructor(statusCode,code,data,message="Success") {
        this.statusCode-statusCode,
        this.data=data,
        this.message=message,
        this.success=statusCode <400
        
    }
}