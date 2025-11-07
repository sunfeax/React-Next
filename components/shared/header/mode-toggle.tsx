'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button"
import { Palette } from 'lucide-react';

const ModeToggle = () => {
    const { theme, setTheme, themes = [] } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const switchTheme = () => {
      const availableThemes = themes.length ? themes : ['light', 'dark'];
      if (!availableThemes.length) return;

      const currentTheme = theme ?? availableThemes[0];
      const currentIndex = availableThemes.indexOf(currentTheme);
      const nextTheme = availableThemes[(currentIndex + 1) % availableThemes.length];

      setTheme(nextTheme);
    };

    return (
      <Button onClick={switchTheme} variant={'ghost'} className='focus-visible:ring-0 focus-visible:ring-offset-0'>
        <Palette />
      </Button>
    )
};
 
export default ModeToggle;
