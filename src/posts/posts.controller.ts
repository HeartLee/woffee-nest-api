import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

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
  async index() {
    return await PostModel.find();
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
  @ApiOperation({ summary: '帖子详情' })
  detail(@Param('id') id: string) {
    return {
      id,
      title: 'woffee 11',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    return {
      success: true,
      data: { id, ...body },
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    return { success: true };
  }
}
