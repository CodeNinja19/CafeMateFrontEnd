
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { useRef,useEffect } from 'react';

export default function SearchBar({message,setMessage,search,deleteAll,filterToggle}) {
  // const myRef=useRef(null);
  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //       search();
        
  //     }
  //   };
  //   myRef.current.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);
  return (
    <Paper
      component="div"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%"  }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={()=> filterToggle( curr => !curr)}>
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1,width:"100%" }}
        placeholder="Search a Cafe"
        value={message}
        inputProps={{ 'aria-label': 'Search a Cafe' }}
        onChange={setMessage}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={search}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={deleteAll}>
        <DeleteForeverTwoToneIcon />
      </IconButton>
    </Paper>
  );
}
