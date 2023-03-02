import { Box } from "@chakra-ui/react";
import ConverstaionsList from "./ConverstaionsList";


interface ConversationsWrapperProps 
{
    
};

const ConversationsWrapper:React.FC<ConversationsWrapperProps> = () => {
    
    return (
        <Box
        width={{base:"100%",md:"400px"}}
        bg = "whiteAlpha.50"
        py={6}
        px={3}
        position="relative">
            <ConverstaionsList/>

        </Box>
    )
}
export default ConversationsWrapper;