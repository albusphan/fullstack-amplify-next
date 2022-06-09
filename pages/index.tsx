import { Box } from "@chakra-ui/react";

import { PageHead } from "@/layouts/PageHead";
import { BigCalendar } from "@/components/BigCalendar";

export default function HomePage() {
  return (
    <Box width="100%" px="4" h="calc(100% - 96px)">
      <PageHead title="Dashboard || 361/DXR" />
      <Box h="100%" p="4" w="100%">
        <BigCalendar />
      </Box>
    </Box>
  );
}
