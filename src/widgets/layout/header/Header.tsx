import Container from "../../../components/Container";
import { Button, TextInput } from "flowbite-react";
import { Bell, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import CartPopover from "./CartPopover";
import ProfileButton from "./ProfileButton";

function Header() {
  return (
    <header className="shadow-sm border-b border-neutral-300 py-3">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <h2>دیجی کالا</h2>
          </Link>
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
          <ProfileButton />
          <div className="w-[1px] bg-slate-400 h-8 mx-2" />
          <CartPopover>
            <Button outline size="xs">
              <ShoppingCart />
            </Button>
          </CartPopover>
        </div>
      </Container>
    </header>
  );
}

export default Header;
