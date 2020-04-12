import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
  //Dto 数据传输对象
  @ApiProperty({ description: '帖子标题' })
  title: string;
  @ApiProperty({ description: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiTags('博客')
export class PostsController {
  @Get('/')
  @ApiOperation({ summary: '博客列表' })
  index() {
    return [{ id: 1 }];
  }
  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDto, @Query() query, @Param() params) {
    return {
      success: true,
      data: body,
    };
  }
  @Get(':id')
  detail() {
    return {
      id: 1,
      title: 'woffee 11',
    };
  }
}
