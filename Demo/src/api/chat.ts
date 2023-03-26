import handleRequest, {Request} from "./handleRequest";

export async function postQuestion(question : string){
    const request: Request = {
        url: '/questions',
        method: 'POST',
        data: {question}
    }

    return await handleRequest(request);
}