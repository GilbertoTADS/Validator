export class Response{
  readonly error:boolean;
  readonly success:boolean;
  readonly message:string;
  readonly data?:any;
  private constructor(error:boolean,success:boolean,message:string, data:any){
    this.error = error;
    this.success = success;
    this.message = message;
    this.data = data;
  }
  static emit(error:boolean,success:boolean,message:string, data:any):Response{
    return new Response(error,success,message,data);
  }
}