import { useEffect, useState } from "react";
import getAllTickets from "utils/getAllTickets";
import {
  Container,
  UserList,
  UserItem,
  UserItemName,
  UserItemDni,
  StatusButton,
  StatusButtonContent,
} from "./SecurityPage.styled";

const SecurityPage = () => {
  const [allTickets, setAllTickets] = useState<Array<any>>([]);

  const filterTickets = (ticketsList: any, status: string) =>
    ticketsList.filter(({ data }) => data.paymentStatus === status);

  useEffect(() => {
    getAllTickets().then(({ data }) => setAllTickets(data.data));
  }, []);

  const getAllTicketsInfo = (ticketsList) => ticketsList.map(({ data }) => data.tickets).flat();

  const approvedTickets = getAllTicketsInfo(filterTickets(allTickets, "approved"));

  const nullTickets = getAllTicketsInfo(filterTickets(allTickets, "null"));

  console.log("approvedTickets", approvedTickets);
  console.log("nullTickets", nullTickets);

  return (
    <Container>
      {approvedTickets.length} Tickets:
      <UserList style={{ marginBottom: "1000" }}>
        {approvedTickets.map(({ name }) => (
          <UserItem>
            {/* <UserItemName>{ticket}</UserItemName> */}
            {/* <UserItemDni>ti</UserItemDni> */}
            <StatusButton>
              <StatusButtonContent>{name}</StatusButtonContent>
            </StatusButton>
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
};

export default SecurityPage;
