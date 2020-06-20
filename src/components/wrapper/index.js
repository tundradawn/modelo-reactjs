import React, {
  useState,
  useEffect,
  useContext
} from "react";
import { useThemeUI } from 'theme-ui'

import { Box } from 'rebass'

/**
 * Simple wrapper that containerizes things nicely.
 * Optionally add px & width settings.
 *
 * Requires size option, defaults to the wrapper.md setting.
 *
 * @type {[type]}
 */
const Wrapper = React.memo(props => {
  const theme = useThemeUI().theme;
  const [wrapperSize, setSize] = useState(theme.wrapper.md);

  useEffect(() => {
    if (theme && theme.wrapper[props.size]) {
      setSize(theme.wrapper[props.size]);
    }
  });

  return (
    <Box sx={{
        maxWidth: wrapperSize,
        width: (props.width ? props.width : '95%'),
        mx: 'auto',
        px: (props.px ? props.px : 10),
      }}
    >
      {props.children}
    </Box>
  );
});

export default Wrapper;
