import { Box, Link, Stack, Typography } from "@mui/material";
import palette from "@theme/palette";
import ReactMarkdown from "react-markdown";

interface Props {
  children: string;
}

export default function MarkdownBlock({ children }: Props) {
  return (
    <Stack spacing={1}>
      <ReactMarkdown
        components={{
          a: ({ href, children }) => (
            <Link
              href={href}
              underline="always"
              sx={{
                color: palette.beige.link,
                textDecorationColor: palette.beige.link,
              }}
            >
              {children}
            </Link>
          ),
          p: ({ children }) => <Typography>{children}</Typography>,
          img: ({ ...props }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                "& img": { maxWidth: 1 },
              }}
            >
              <img {...props} />
            </Box>
          ),
          blockquote: ({ children }) => (
            <Typography
              component="blockquote"
              sx={{
                borderLeft: `3px solid ${palette.beige.border}`,
                py: 0.5,
                pl: 1,
              }}
            >
              {children}
            </Typography>
          ),
          ul: ({ children }) => (
            <Stack component="ul" sx={{ pl: 3 }}>
              {children}
            </Stack>
          ),
          ol: ({ children }) => (
            <Stack component="ol" sx={{ pl: 3 }}>
              {children}
            </Stack>
          ),
          li: ({ children }) => (
            <Typography component="li">{children}</Typography>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </Stack>
  );
}
