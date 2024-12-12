import { Button, TextInput } from "flowbite-react";
import { Bell, Search, ShoppingCart, UserRound } from "lucide-react";
import Container from "../../components/Container";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <header>
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2>دیجی کالا</h2>
              <TextInput
                rightIcon={Search}
                className="w-96"
                id="search"
                type="search"
                placeholder="جست و جو"
              />
            </div>
            <div className="flex items-center gap-1">
              <Button outline size="xs">
                <Bell />
              </Button>
              <Button outline size="xs">
                <UserRound />
              </Button>
              <div className="w-[1px] bg-slate-400 h-8 mx-2" />
              <Button outline size="xs">
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default Layout;
