---
title: How to Write Session Summaries
description: A guide and example for creating structured session summaries for OpenHands projects
pubDate: 2025-03-08T12:10:00Z
---

# Writing Session Summaries

This guide shows how to create well-structured session summaries for OpenHands projects. Follow this format to ensure your summaries are consistent and can be easily imported into the central documentation.

## Basic Structure

Every session summary should include:
1. YAML frontmatter with metadata
2. Key sections describing the session
3. Optional sections for additional context

## Required Frontmatter

```yaml
---
title: Your Session Title
description: A brief description of what was accomplished
pubDate: 2025-03-08T12:10:00Z  # ISO timestamp when created
---
```

## Core Sections

### USER_CONTEXT
Describe the initial task or problem that needed to be solved. For example:
```markdown
# USER_CONTEXT
Create a new API endpoint for user authentication with JWT support and rate limiting.
```

### STATE
List the current state of components and features:
```markdown
# STATE
- Created /auth/login endpoint
- JWT middleware implemented
- Rate limiting: 100 req/hour per IP
- Tests passing for happy path
```

### TESTS
Document what was tested and results:
```markdown
# TESTS
- ✅ Login with valid credentials
- ✅ JWT token validation
- ❌ Rate limit exceeded handling
- 🟡 Edge cases pending
```

### CHANGES
List specific modifications made:
```markdown
# CHANGES
- Added auth controller in src/controllers/
- Created JWT middleware
- Updated rate limiting config
- Added test suite for auth flow
```

### DEPS
Document dependencies and versions:
```markdown
# DEPS
- Using jsonwebtoken@9.0.0
- express-rate-limit@6.7.0
- jest for testing
```

### INTENT
Explain the goals and reasoning:
```markdown
# INTENT
- Secure API access
- Prevent brute force attacks
- Maintain API stability
```

## Optional Sections

### NEXT_STEPS
Future tasks or improvements:
```markdown
# NEXT_STEPS
- Add password reset flow
- Implement OAuth providers
- Enhance rate limit rules
```

### ISSUES
Known issues or limitations:
```markdown
# ISSUES
- Rate limit doesn't persist across restarts
- JWT refresh token not implemented yet
```

## Example Summary

Here's a complete example of a session summary:

```markdown
---
title: Implement JWT Authentication
description: Added JWT-based authentication system with rate limiting
pubDate: 2025-03-08T12:10:00Z
---

# USER_CONTEXT
Create secure authentication system using JWT tokens with rate limiting to prevent abuse.

# STATE
- /auth/login endpoint created and tested
- JWT middleware working
- Rate limiting implemented
- Basic tests passing

# TESTS
- ✅ POST /auth/login returns JWT
- ✅ Protected routes require valid JWT
- ✅ Rate limit blocks excess requests
- ❌ Refresh token flow failing
- 🟡 Password reset not tested

# CHANGES
- Created AuthController.ts
- Added JWTMiddleware.ts
- Updated app.ts with rate limiting
- Added auth.test.ts suite

# DEPS
- jsonwebtoken@9.0.0
- express-rate-limit@6.7.0
- @types/jsonwebtoken@9.0.1
- jest@29.5.0

# INTENT
- Enable secure API access
- Prevent unauthorized access
- Protect against brute force
- Prepare for OAuth integration

# NEXT_STEPS
- Implement refresh tokens
- Add password reset
- Add OAuth providers
- Enhance rate limiting
```

## Tips for Good Summaries

1. **Be Specific**: Include version numbers, file paths, and exact changes
2. **Use Emojis**: ✅ ❌ 🟡 to indicate status clearly
3. **Keep It Structured**: Use consistent headings and formatting
4. **Include Context**: Help others understand why changes were made
5. **Think Future**: Note down next steps and known issues

## Automatic Import

Your summaries will be automatically imported to the central documentation:
1. They'll be renamed to include your repository info
2. Additional metadata will be added
3. They'll be categorized and linked appropriately

## Questions?

If you have questions about writing summaries or the import process, please:
1. Check the [documentation](https://github.com/e-jigsaw/open-hands-sandbox)
2. Open an issue in the repository
3. Ask in the community chat