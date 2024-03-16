export default {
  properties: {
    documentation: {
      type: "object",
      properties: {
        tags: {
          type: "array",
          items: {
            type: "string",
          },
          uniqueItems: true,
        },
        summary: {
          type: "string",
          description: "A brief summary of the operation.",
        },
        description: {
          type: "string",
          description:
            "A longer description of the operation, GitHub Flavored Markdown is allowed.",
        },
        externalDocs: {
          type: "object",
          additionalProperties: false,
          description: "information about external documentation",
          required: ["url"],
          properties: {
            description: {
              type: "string",
            },
            url: {
              type: "string",
            },
          },
        },
        operationId: {
          type: "string",
          description: "A unique identifier of the operation.",
        },
        produces: {
          description: "A list of MIME types the API can produce.",
          allOf: [
            {
              type: "array",
              items: {
                type: "string",
                description: "The MIME type of the HTTP message.",
              },
              uniqueItems: true,
            },
          ],
        },
        consumes: {
          description: "A list of MIME types the API can consume.",
          allOf: [
            {
              type: "array",
              items: {
                type: "string",
                description: "The MIME type of the HTTP message.",
              },
              uniqueItems: true,
            },
          ],
        },
        parameters: {
          type: "array",
          description: "The parameters needed to send a valid API call.",
          items: {
            oneOf: [
              {
                type: "object",
                required: ["name", "in", "schema"],
                properties: {
                  description: {
                    type: "string",
                    description:
                      "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.",
                  },
                  name: {
                    type: "string",
                    description: "The name of the parameter.",
                  },
                  in: {
                    type: "string",
                    description: "Determines the location of the parameter.",
                    enum: ["body"],
                  },
                  required: {
                    type: "boolean",
                    description:
                      "Determines whether or not this parameter is required or optional.",
                    default: false,
                  },
                  schema: {
                    type: "object",
                    description:
                      "A deterministic version of a JSON Schema object.",
                  },
                },
                additionalProperties: false,
              },
              {
                type: "object",
                required: ["name", "in", "type"],
                properties: {
                  required: {
                    type: "boolean",
                    description:
                      "Determines whether or not this parameter is required or optional.",
                    default: false,
                  },
                  in: {
                    type: "string",
                    description: "Determines the location of the parameter.",
                    enum: ["header", "path", "query"],
                  },
                  description: {
                    type: "string",
                    description:
                      "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.",
                  },
                  name: {
                    type: "string",
                    description: "The name of the parameter.",
                  },
                  type: {
                    type: "string",
                    enum: ["string", "number", "boolean", "integer", "array"],
                  },
                  format: {
                    type: "string",
                  },
                },
              },
            ],
          },
          uniqueItems: true,
        },
        responses: {
          type: "object",
          description:
            "Response objects names can either be any valid HTTP status code or 'default'.",
          minProperties: 1,
          additionalProperties: false,
          patternProperties: {
            "^([0-9]{3})$|^(default)$": {
              type: "object",
              required: ["description"],
              properties: {
                description: {
                  type: "string",
                },
                schema: {
                  type: "object",
                },
                headers: {
                  type: "object",
                },
                examples: {
                  type: "object",
                },
              },
              additionalProperties: false,
            },
          },
        },
        schemes: {
          type: "array",
        },
        deprecated: {
          type: "boolean",
          default: false,
        },
        security: {
          type: "object",
        },
      },
    },
  },
};
