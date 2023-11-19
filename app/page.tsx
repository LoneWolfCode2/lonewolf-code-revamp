import { Container, Typography } from "@mui/material";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Container className="text-center uppercase">
        <Typography variant="h3">Welcome to</Typography>
        <Typography variant="subtitle1">Lone Wolf Code</Typography>
      </Container>
    </main>
  );
}
