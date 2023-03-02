import { Box, Text, useDisclosure } from "@chakra-ui/react";
import ConversationModal from "./Modal/ConversationModal";

interface ConverstaionsListProps {}

const ConverstaionsList: React.FC<ConverstaionsListProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <Box>
      <Box
        py={2}
        px={4}
        mb={4}
        borderRadius={4}
        cursor="pointer"
        bg="blackAlpha.300"
        onClick={()=>onOpen()}
      >
        <Text color="whiteAlpha.800" fontWeight={500}>
          Find or start a conversations
        </Text>
        <ConversationModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
};
export default ConverstaionsList;
