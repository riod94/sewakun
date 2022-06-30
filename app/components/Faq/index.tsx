import React from 'react'
import { Box, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/layout'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, useColorModeValue } from '@chakra-ui/react'

function Faq() {
    return (
        <Container id='faq' maxW={"6xl"} py={8}>
            <Stack py={8} spacing={0} align={'center'}>
                <Heading>Frequently Asked Questions (FAQ)</Heading>
            </Stack>
            <Stack>
                <SimpleGrid columns={2} spacing={5}>
                    <Box>
                        <Accordion allowToggle allowMultiple>
                            <AccordionItem rounded={20}>
                                <Heading as={"h2"}>
                                    <AccordionButton rounded={20} bg={useColorModeValue('brand.500', 'gray.500')} color='white' _hover={{color:useColorModeValue('brand.50', 'brand.600')}}>
                                        <Box flex='1' textAlign='left'>
                                            Click me to see a different style
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowToggle allowMultiple>
                            <AccordionItem rounded={20}>
                                <Heading as={"h2"}>
                                    <AccordionButton rounded={20} bg={useColorModeValue('brand.500', 'gray.500')} color='white' _hover={{color:useColorModeValue('brand.50', 'brand.600')}}>
                                        <Box flex='1' textAlign='left'>
                                            Click me to see a different style
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowToggle allowMultiple>
                            <AccordionItem rounded={20}>
                                <Heading as={"h2"}>
                                    <AccordionButton rounded={20} bg={useColorModeValue('brand.500', 'gray.500')} color='white' _hover={{color:useColorModeValue('brand.50', 'brand.600')}}>
                                        <Box flex='1' textAlign='left'>
                                            Click me to see a different style
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowToggle allowMultiple>
                            <AccordionItem rounded={20}>
                                <Heading as={"h2"}>
                                    <AccordionButton rounded={20} bg={useColorModeValue('brand.500', 'gray.500')} color='white' _hover={{color:useColorModeValue('brand.50', 'brand.600')}}>
                                        <Box flex='1' textAlign='left'>
                                            Click me to see a different style
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowToggle allowMultiple>
                            <AccordionItem rounded={20}>
                                <Heading as={"h2"}>
                                    <AccordionButton rounded={20} bg={useColorModeValue('brand.500', 'gray.500')} color='white' _hover={{color:useColorModeValue('brand.50', 'brand.600')}}>
                                        <Box flex='1' textAlign='left'>
                                            Click me to see a different style
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </SimpleGrid>
            </Stack>
        </Container>
    )
}

export default Faq