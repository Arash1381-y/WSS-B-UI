import {useMutation} from "@tanstack/react-query";
import {postQuestion} from "../../api/chat";

export default function useSendMessage() {
    return useMutation({
            mutationFn: postQuestion,
        }
    )
}