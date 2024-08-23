import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "@/styles/Navigation.module.css";

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
type NavbarProps = {
  refs: {
    headerRef: React.RefObject<HTMLDivElement>;
    section2Ref: React.RefObject<HTMLDivElement>;
    section3Ref: React.RefObject<HTMLDivElement>;
  };
};

const Navbar = ({ refs }: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    }
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.roundedcornersborder}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <h2>A2 SECURITY</h2>
            </div>
            <div className={styles.line}></div>
            <div className={styles.links}>
              <div>
                <a onClick={() => scrollToSection(refs.headerRef)}>Work</a>
              </div>
              <div>
                <a onClick={() => scrollToSection(refs.section2Ref)}>
                  How we work
                </a>
              </div>
              <div>
                <a onClick={() => scrollToSection(refs.section3Ref)}>
                  Testimonials
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <HideOnScroll>
        <AppBar
          position="fixed"
          className={styles.mobileNavbar}
          style={{ backgroundColor: "transparent" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            width: "50vw",
            height: "100vh",
            backgroundColor: "#232323c6",
            color: "white",
            border: "2px solid rgba(170, 168, 255, 0.5)",
            fontSize: "150px",
            letterSpacing: "12px",
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Darkens the backdrop with reduced brightness
          },
        }}
      >
        <IconButton
          onClick={toggleDrawer(false)}
          style={{ alignSelf: "flex-end" }}
        >
          <CloseIcon />
        </IconButton>
        <List>
          <ListItem
            button
            onClick={() => scrollToSection(refs.headerRef)}
            className={styles.listItem}
          >
            <ListItemText primary="Work" />
          </ListItem>
          <ListItem
            button
            onClick={() => scrollToSection(refs.section2Ref)}
            className={styles.listItem}
          >
            <ListItemText primary="How we work" />
          </ListItem>
          <ListItem
            button
            onClick={() => scrollToSection(refs.section3Ref)}
            className={styles.listItem}
          >
            <ListItemText primary="Testimonials" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
