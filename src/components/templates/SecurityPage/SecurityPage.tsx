import { useEffect, useState } from "react";
import getAllTickets from "utils/getAllTickets";
import { Container, UserList, UserItem, UserItemName, UserItemDni } from "./SecurityPage.styled";

const SecurityPage = () => {
  const [allTickets, setAllTickets] = useState<Array<any>>([]);

  const getAllTicketsInfo = (ticketsList) =>
    ticketsList.map(({ data }) => ({
      tickets: data.tickets,
      paymentStatus: data.paymentStatus,
    }));

  useEffect(() => {
    getAllTickets().then(({ data }) => setAllTickets(getAllTicketsInfo(data.data)));
  }, []);

  console.log(allTickets.map(({ tickets }) => tickets).flat());

  return (
    <Container>
      {allTickets.map(({ tickets }) => tickets).flat().length} Tickets:
      <UserList>
        {allTickets.map(({ payer, tickets, paymentStatus }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <UserItem key={`UserItem-${index}-${payer}`}>
            <UserItemName>{payer}</UserItemName>
            <UserItemName>Status {paymentStatus}</UserItemName>
            {tickets.map(({ name, dni }) => (
              <>
                <UserItemDni>{name}</UserItemDni>
                <UserItemDni>{dni}</UserItemDni>
              </>
            ))}
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
};

export default SecurityPage;
